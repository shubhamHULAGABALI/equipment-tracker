import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [equipment, setEquipment] = useState([]);
  const [search, setSearch] = useState("");
  const [form, setForm] = useState({
    id: null,
    name: "",
    type: "Machine",
    status: "Active",
    lastCleaned: ""
  });

  // Load data
  const loadData = async () => {
    const res = await axios.get("http://localhost:5000/api/equipment");
    setEquipment(res.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  // Add / Update
  const submit = async e => {
    e.preventDefault();

    if (!form.name) {
      alert("Name is required");
      return;
    }

    if (form.id) {
      await axios.put(
        `http://localhost:5000/api/equipment/${form.id}`,
        form
      );
    } else {
      await axios.post("http://localhost:5000/api/equipment", form);
    }

    setForm({
      id: null,
      name: "",
      type: "Machine",
      status: "Active",
      lastCleaned: ""
    });

    loadData();
  };

  // Edit
  const editItem = item => {
    setForm(item);
  };

  // Delete
  const deleteItem = async id => {
    if (!window.confirm("Are you sure?")) return;
    await axios.delete(`http://localhost:5000/api/equipment/${id}`);
    loadData();
  };

  // SEARCH FILTER
  const filteredEquipment = equipment.filter(e =>
    e.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: 20 }}>
      <h2>Equipment Tracker</h2>

      {/* SEARCH */}
      <input
        placeholder="Search by equipment name"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <br /><br />

      {/* FORM */}
      <form onSubmit={submit}>
        <input
          placeholder="Name"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
        />

        <select
          value={form.type}
          onChange={e => setForm({ ...form, type: e.target.value })}
        >
          <option>Machine</option>
          <option>Vessel</option>
          <option>Tank</option>
          <option>Mixer</option>
        </select>

        <select
          value={form.status}
          onChange={e => setForm({ ...form, status: e.target.value })}
        >
          <option>Active</option>
          <option>Inactive</option>
          <option>Under Maintenance</option>
        </select>

        <input
          type="date"
          value={form.lastCleaned}
          onChange={e =>
            setForm({ ...form, lastCleaned: e.target.value })
          }
        />

        <button>{form.id ? "Update" : "Add"}</button>
      </form>

      <br />

      {/* TABLE */}
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Status</th>
            <th>Last Cleaned</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredEquipment.map(e => (
            <tr key={e.id}>
              <td>{e.name}</td>
              <td>{e.type}</td>
              <td>{e.status}</td>
              <td>{e.lastCleaned}</td>
              <td>
                <button onClick={() => editItem(e)}>Edit</button>
                <button onClick={() => deleteItem(e.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

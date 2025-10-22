import React, { useState, useEffect } from 'react';
import { signOut } from 'firebase/auth';
import { auth, db } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';
import '../styles/Admin.scss';

const Admin = () => {
  const navigate = useNavigate();

  const [listings, setListings] = useState([]);
  const [form, setForm] = useState({
    title: '',
    price: '',
    beds: '',
    baths: '',
    area: '',
    type: '',
    image: '',
  });
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const fetchListings = async () => {
      const snapshot = await getDocs(collection(db, 'listings'));
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setListings(data);
    };
    fetchListings();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/');
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddListing = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'listings'), form);
      setForm({
        title: '',
        price: '',
        beds: '',
        baths: '',
        area: '',
        type: '',
        image: '',
      });
      setModalOpen(false);
      const snapshot = await getDocs(collection(db, 'listings'));
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setListings(data);
    } catch (error) {
      console.error('Error adding listing:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, 'listings', id));
      setListings(listings.filter(item => item.id !== id));
    } catch (error) {
      console.error('Error deleting listing:', error);
    }
  };

  return (
    <div className="admin">
      <p><div className="pilldot"></div>Admin</p>
      <div className="admin-top">
        <h2>Admin <span>Panel</span></h2>
        <div className="buttons">
          <button onClick={() => setModalOpen(true)} className="add-btn"><i class="ri-add-fill"></i>Add Property</button>
          <button onClick={handleLogout} className="logout-btn"><i class="ri-logout-circle-r-line"></i></button>
        </div>
      </div>

      <div className="cards">
        {listings.map(item => (
          <div className="card" key={item.id}>
            <img src={item.image} alt={item.title} />
            <div className="overlay">
              <div className="bottom">
                <h4>{item.title}</h4>
                <h4>{item.price}</h4>
              </div>
              <div className="top">
                <div><i className="ri-hotel-bed-line"></i> {item.beds}</div>
                <div><i className="ri-shower-line"></i> {item.baths}</div>
                <div><i className="ri-ruler-2-line"></i> {item.area}</div>
              </div>
            </div>
            <button className="delete-btn" onClick={() => handleDelete(item.id)}>Delete</button>
          </div>
        ))}
      </div>

      {modalOpen && (
        <div className="modal-backdrop" onClick={() => setModalOpen(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setModalOpen(false)}><i class="ri-close-fill"></i></button>
            <div className="modal-body">
              <div className="modal-left">
                <div className="square-preview">
                </div>
              </div>
              <form onSubmit={handleAddListing} className="modal-form">
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" value={form.title} onChange={handleChange} required />
                  </div>
                  <div className="form-field">
                    <label htmlFor="price">Price</label>
                    <input type="text" name="price" value={form.price} onChange={handleChange} required />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="beds">Beds</label>
                    <input type="text" name="beds" value={form.beds} onChange={handleChange} required />
                  </div>
                  <div className="form-field">
                    <label htmlFor="baths">Baths</label>
                    <input type="text" name="baths" value={form.baths} onChange={handleChange} required />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="area">Area</label>
                    <input type="text" name="area" value={form.area} onChange={handleChange} required />
                  </div>
                  <div className="form-field">
                    <label htmlFor="type">Type</label>
                    <input type="text" name="type" value={form.type} onChange={handleChange} required />
                  </div>
                </div>

                <div className="form-row full-width">
                  <div className="form-field">
                    <label htmlFor="image">Image URL</label>
                    <input type="text" name="image" value={form.image} onChange={handleChange} required />
                  </div>
                </div>

                <button type="submit" className="modal-add-btn">Add</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;

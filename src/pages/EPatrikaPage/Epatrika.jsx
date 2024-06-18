import React, { useState } from 'react';
import TopBar from '../../components/TopBar/TopBar';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import './Epatrika.css';
import Logo from '../../assets/utkal diganta.png';
import PDF from '../../assets/epatrika.pdf'

const Epatrika = () => {
  const [displayPDF, setDisplayPDF] = useState(false);
  const [activeModal, setActiveModal] = useState(null);

  function showModal(modalId) {
    setActiveModal(modalId);
  }

  function hideModal() {
    setActiveModal(null);
  }

  const renderModal = (modalId) => {
    switch (modalId) {
      case 'experience-modal':
        return (
          <div className="modal" id={modalId} key={modalId}>
            <div className="modal-header">
              <h5 className="modal-title">Form For E-Patrika</h5>
              <button className="close" onClick={hideModal}>
                &times;
              </button>
            </div>
            <div className="modal-body">
              <form>
                <input type="text" name="authorname" class="modal-input" placeholder="Author Name" />
                <input type="text" name="storyname" placeholder="Story Name" />
                <input type="text" name="description" placeholder="Description" />
                <input type="file" name="file" placeholder="Picture" />
              </form>
            </div>
            <div className="modal-footer">
              <button className="buttonn" onClick={hideModal}>
                Cancel
              </button>
              <button className="buttonn" onClick={hideModal}>
                Submit
              </button>
            </div>
          </div>
        );

      case 'another-modal':
        return (
          <div className="modal" id={modalId} key={modalId}>
            <div className="modal-header">
              <h5 className="modal-title">Form For E-Patrika</h5>
              <button className="close" onClick={hideModal}>
                &times;
              </button>
            </div>
            <div className="modal-body">
              {/* Add content for the second modal here */}
              <form>
                <input type="text" name="authorname" placeholder="Author Name" />
                <input type="text" name="storyname" placeholder="Poem Name" />
                <input type="text" name="description" placeholder="Description" />
                <input type="file" name="file" placeholder="Picture" />
              </form>
            </div>
            <div className="modal-footer">
              <button className="buttonn" onClick={hideModal}>
                Cancel
              </button>
              <button className="buttonn" onClick={hideModal}>
                Submit
              </button>
            </div>
          </div>
        );

      case 'third-modal':
        return (
          <div className="modal" id={modalId} key={modalId}>
            <div className="modal-header">
              <h5 className="modal-title">Form For E-Patrika</h5>
              <button className="close" onClick={hideModal}>
                &times;
              </button>
            </div>
            <div className="modal-body">
              {/* Add content for the third modal here */}
              <form>
                <input type="text" name="authorname" placeholder="Author Name" />
                <input type="text" name="storyname" placeholder="Story Name" />
                <input type="text" name="description" placeholder="Description" />
                <input type="file" name="file" placeholder="Picture" />
              </form>
            </div>
            <div className="modal-footer">
              <button className="buttonn" onClick={hideModal}>
                Cancel
              </button>
              <button className="buttonn" onClick={hideModal}>
                Submit
              </button>
            </div>
          </div>
        );

      case 'fourth-modal':
        return (
          <div className="modal" id={modalId} key={modalId}>
            <div className="modal-header">
              <h5 className="modal-title">Form For E-Patrika</h5>
              <button className="close" onClick={hideModal}>
                &times;
              </button>
            </div>
            <div className="modal-body">
              {/* Add content for the fourth modal here */}
              <form>
                <input type="text" name="authorname" placeholder="Author Name" />
                <input type="text" name="storyname" placeholder="Story Name" />
                <input type="text" name="description" placeholder="Description" />
                <input type="file" name="file" placeholder="Picture" />
              </form>
            </div>
            <div className="modal-footer">
              <button className="buttonn" onClick={hideModal}>
                Cancel
              </button>
              <button className="buttonn" onClick={hideModal}>
                Submit
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <TopBar />
      <NavBar />
      <div className="container">
        <div className="header">
          <img  className="utkal_logo" src={Logo} alt="Logo" />
          <h1 className="e-head">Utkal Diganta</h1>
          <br />
        </div>
        <div className="pdf-container">
          {displayPDF ? (
            <>
              <iframe
                title="PDFViewer"
                src={PDF}
                style={{ width: '100%', height: '500px', border: 'none' }}
              />
              <button className="buttonn" onClick={() => setDisplayPDF(false)}>
                Close
              </button>
            </>
          ) : (
            <button className="buttonn" onClick={() => setDisplayPDF(true)}>
             "Explore Our Epatrika Publication" 
            </button>
          )}
        </div>
        <div className="main-content">
          <div className="cta">
            <h3 className="textt">Please contribute your Story, experience, poem, or writing for publication in the patrika.</h3>
          </div>
          <div className="buttonn-container">
            {/* Button 1 */}
            <button className="buttonn" onClick={() => showModal('experience-modal')}>
            Write a story
            </button>

            {/* Button 2 */}
            <button className="buttonn" onClick={() => showModal('another-modal')}>
            Write a poem
            </button>

            {/* Button 3 */}
            <button className="buttonn" onClick={() => showModal('third-modal')}>
            Write your Experience
            </button>

            {/* Button 4 */}
            <button className="buttonn" onClick={() => showModal('fourth-modal')}>
            Writting for publication
            </button>
          </div>

          {/* Render active modal */}
          {activeModal && renderModal(activeModal)}

          {/* Modal overlay */}
          {activeModal && <div className="modal-overlay" onClick={hideModal}></div>}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Epatrika;

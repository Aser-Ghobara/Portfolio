import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Modal from 'react-modal';

const projects = [
  {
    id: 1,
    title: 'First Portfolio',
    imageUrl: 'https://imgur.com/8ZX8CVB.jpg',
    link: 'https://aser-ghobara.github.io/',
  },
  {
    id: 2,
    title: 'Lotion - Notes Application',
    imageUrl: 'https://imgur.com/NhKRGUE.jpg',
    link: 'https://effulgent-bienenstitch-58b0e3.netlify.app/notes/1/edit',
  },

  {
    id: 3,
    title: 'Obituarity - A website for obituaries',
    imageUrl: 'https://imgur.com/Ux9gw7d.jpg',
    link: 'https://obituarity.netlify.app/',
  },
  
  // Add more projects as needed
];

const Projects = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setModalIsOpen(false);
  };

  return (
    <section id="projects">
      <div className="projcontent">
        <div className="title">
          <h2>Projects</h2>
          <p>
            I am a software engineer based in Canada. I enjoy creating things
            that live on the internet, whether that be websites, applications,
            or anything in between. My goal is to always build products that
            provide pixel-perfect, performant experiences.
          </p>
        </div>

        <Carousel showThumbs={false}>
          {projects.map((project) => (
            <div key={project.id} onClick={() => openModal(project)}>
              <img
                src={project.imageUrl}
                alt={project.title}
                style={{ maxWidth: '100%', maxHeight: '100%' }}
              />
              <p className="legend">{project.title}</p>
            </div>
          ))}
        </Carousel>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Project Modal"
      >
        {selectedProject && (
          <div className="modal-content">
            <img
              src={selectedProject.imageUrl}
              alt={selectedProject.title}
              style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
            <h2>{selectedProject.title}</h2>
            <p>
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </p>
            <button onClick={closeModal}>Close</button>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Projects;

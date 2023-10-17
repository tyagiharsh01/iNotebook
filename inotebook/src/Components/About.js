import React from 'react';

const About = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="card bg-light shadow">
            <div className="card-body">
              <h2 className="card-title text-center text-primary">iNotebook - Your Cloud-Based Notebook</h2>
              <hr />
              <p className="card-text">
                iNotebook is your digital notebook in the cloud, designed to help you stay organized and stylishly manage your notes. Take notes, keep ideas, and stay productive.
              </p>
              <p className="card-text">
                With iNotebook, you can access your notes from anywhere and never worry about losing them. It's your ultimate note-taking companion.
              </p>
              <p className="card-text">
                Have questions or need assistance? Reach out to our support team at <a href="mailto:support@example.com">support@example.com</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

import React from 'react';

interface Profile {
  id: number;
  name: string;
  age: number;
  bio: string;
  avatarUrl: string;
}

const profiles: Profile[] = [
  {
    id: 1,
    name: 'Alice',
    age: 28,
    bio: 'Loves hiking and art.',
    avatarUrl: 'https://via.placeholder.com/100',
  },
  {
    id: 2,
    name: 'Bob',
    age: 30,
    bio: 'Coffee enthusiast.',
    avatarUrl: 'https://via.placeholder.com/100',
  },
  {
    id: 3,
    name: 'Carol',
    age: 27,
    bio: 'Tech geek.',
    avatarUrl: 'https://via.placeholder.com/100',
  },
];

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Peemly Dating</h1>
      <div className="profiles">
        {profiles.map((profile) => (
          <div key={profile.id} className="card">
            <img src={profile.avatarUrl} alt={`${profile.name} avatar`} />
            <h2>
              {profile.name}, {profile.age}
            </h2>
            <p>{profile.bio}</p>
            <div className="actions">
              <button>&#x1F44D;</button>
              <button>&#x1F44E;</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;

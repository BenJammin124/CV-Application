export default function PersonalDetails({ personalDetails, onChange }) {
  return (
    <div>
      <div>
        <label htmlFor="name">Full name:</label>
        <input
          type="text"
          id="name"
          value={personalDetails.name}
          onChange={onChange}
          // placeholder="John Doe"
        />
      </div>
      <div>
        <label htmlFor="occupation">Current occupation:</label>
        <input
          type="text"
          id="occupation"
          value={personalDetails.occupation}
          onChange={onChange}
          // placeholder="Chef"
        />
      </div>
      <div>
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          value={personalDetails.address}
          onChange={onChange}
          // placeholder="13 Elm Street, Elmville, NY"
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          value={personalDetails.email}
          onChange={onChange}
        />
      </div>
      <div>
        <label htmlFor="phone">Phone:</label>
        <input
          type="text"
          id="phone"
          value={personalDetails.phone}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

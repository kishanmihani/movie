export default function Register() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="bg-card p-8 rounded-xl w-80">
        <h2 className="text-xl mb-4">Register</h2>

        <input className="w-full p-2 mb-3 bg-surface rounded" placeholder="Name" />
        <input className="w-full p-2 mb-3 bg-surface rounded" placeholder="Email" />
        <input type="password" className="w-full p-2 mb-4 bg-surface rounded" placeholder="Password" />

        <button className="bg-primary w-full py-2 rounded">
          Register
        </button>
      </div>
    </div>
  );
}

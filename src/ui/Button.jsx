
const Button = ({ title, px, py }) => {
  return (
    <div>
       <button
      className={`px-4 py-2 rounded-xl bg-linear-to-r from-purple-500 to-blue-600 text-white font-semibold shadow-lg shadow-purple-900/40 hover:scale-105 hover:shadow-xl transition duration-300 ${px ? `px-${px}` : ""} ${py ? `py-${py}` : ""}`}
    >
      {title}
    </button>
    </div>
  )
}

export default Button

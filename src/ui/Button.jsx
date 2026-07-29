
const Button = ({ title, px, py }) => {
  return (
    <div>
       <button
      className={`px-4 py-2 rounded-xl  bg-blue-950 text-white font-semibold    transition duration-300 ${px ? `px-${px}` : ""} ${py ? `py-${py}` : ""}`}
    >
      {title}
    </button>
    </div>
  )
}

export default Button

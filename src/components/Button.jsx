function Button(props) {
  return (
    <button className="bg-slate-400 p-2 rounded-md text-white gap-2" {...props}>
      {props.children}
    </button>
  );
}

export default Button;

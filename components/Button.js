function Button({ linear, text }) {
  return <button className={`text-white ${linear ? "bg-gradient-to-r from-[#5117F4] to-[#DF25E1]" : "border border-[#DF25E1] hover:bg-white duration-150 hover:text-[#5117F4]"} py-4 px-12 font-bold exo font-lg rounded-md`}>{text}</button>;
}

export default Button;

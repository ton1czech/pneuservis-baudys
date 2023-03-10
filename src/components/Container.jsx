export default function Container({ children, dark }) {
  return (
    <div
      className={`${
        dark ? 'bg-dark' : 'bg-light'
      } w-full overflow-hidden font-poppins px-5 relative`}
    >
      <div className={`lg:max-w-[80%] mx-auto`}>{children}</div>
    </div>
  )
}

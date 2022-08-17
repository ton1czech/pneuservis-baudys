export default function Container({ children, dark }) {
  return (
    <div
      className={`${
        dark ? 'bg-dark' : 'bg-light'
      } w-full overflow-hidden font-poppins px-5`}
    >
      <div className={`lg:max-w-[60%] m-auto`}>{children}</div>
    </div>
  )
}

export default function Container({ children, dark }) {
  return (
    <div
      className={`${
        dark ? 'bg-dark' : 'bg-light'
      } w-full overflow-hidden font-poppins px-5 relative`}
    >
      <div className={`2xl:max-w-[60%] lg:max-w-[80%] m-auto`}>{children}</div>
    </div>
  )
}

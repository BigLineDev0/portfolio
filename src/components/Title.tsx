interface TittleProps {
    title : string
}
const Title = ({title} : TittleProps) => {
  return (
    <h1 className="uppercase font-bold mb-5 text-center text-3xl">
      {title}
    </h1>
  )
}

export default Title

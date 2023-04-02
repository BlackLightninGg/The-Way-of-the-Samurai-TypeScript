type LerningType = {
  learn: Array<string>
}



export const Technologies = (props: LerningType) => {
  return (
    <div>
      <ul>
        {props.learn.map((el) => {
          return (
            <li>{el}</li>
          )
        })}
        {/* <li>HTML</li>
          <li>CSS</li>
          <li>JS</li>
          <li>React</li> */}
      </ul>
    </div>
  )
}
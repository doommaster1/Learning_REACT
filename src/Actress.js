export const Actress = (props) => {
  const born = 1994  
  return (
          <div>
            {props.name} <span style={{ color: "red" }}>{props.ethnicity}</span>
          </div>
        );
}
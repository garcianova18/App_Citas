

export const Error = ({mensaje}) => {
  return (
    
    <div className="col-12 py-3 bg-danger rounded">
              <p className="text-light  text-center text-bold ">
                {mensaje}
              </p>
            </div>
  )
}

import calculateBmi from "../common/calculateBmi";


const BmiForm = (props) => {

    const {state, setState} = props;

    const { height, weight } = state
    return (
      <form>
        <div>
          <label htmlFor="height">Height:</label>
          <input
            id="height"
            type="text"
            className="form-control"
            placeholder="Cm"
            value={ height }
                    onChange={(event) => {
                        setState({
                            ...state,
                        height: event.target.value});
            }}
          />
        </div>

        <div>
          <label htmlFor="weight">Weight:</label>
          <input
            id="weight"
            type="text"
            className="form-control"
            placeholder="Kg"
            value={weight}
                    onChange={(event) => {
                        setState({
                            ...state,
                        weight: event.target.value,
            });
            }}
          />
        </div>

            <button
                className="btn btn-success w-100"
                onClick={() => {
                    if (height < 100) {
                        alert("Dear User, you need to put height more than 100");
                        return;
                    }
                    if (height < 50) {
                           alert(
                             "Dear User, you need to put weight more than 50"
                           );
                           return;
                         }
                   const result = calculateBmi(height, weight)
                    console.log('result', result);
                        setState({
                              ...state,
                              result: result
                     });
                }}
                type='button'
            >
                Calculate
            </button>
      </form>
    );

};

export default BmiForm;
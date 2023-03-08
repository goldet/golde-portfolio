const  GoHomeButton= () => {
    return (
<>

<button
            className="show-content-button"
            style={{
              position: "absolute",
              top: "50%",
              left: "45%",
              transform: "translate(-50%, -50%)",
            }}
            onClick={handleContentClickTrue}
          ></button>

</>

      );
}
 
export default GoHomeButton ;

/* make a reusable go back button thats invisible */
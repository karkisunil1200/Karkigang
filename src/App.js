import { Person } from "@mui/icons-material";
import { Button } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Button
        variant="contained"
        startIcon={<Person />}
        style={{ background: "pink" }}
      >
        Hello there
      </Button>
    </div>
  );
}

export default App;

import { PaperProvider } from "react-native-paper";
import UserList from "./pages/UserList";

export default function App() {
  return (
    <PaperProvider>
      <UserList />
    </PaperProvider>
  );
}

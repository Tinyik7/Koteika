import { useParams } from "react-router-dom";

function DynamicRoute() {
  const { roomId } = useParams();
    return (
    <div>
        <h1>Профиль пользователя: {roomId}</h1>
    </div>
    );
}
export default DynamicRoute;
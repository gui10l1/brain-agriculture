import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { Container } from "./styles";

export default function Back() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  }

  return (
    <Container onClick={handleGoBack}>
      <FiArrowLeft size={16} />
    </Container>
  );
}
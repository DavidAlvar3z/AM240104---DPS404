import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import NavBar from "../../components/NavBar";
import ListadoClases from "../../components/ListadoClases";
import { ReservationContext } from "../../context/ReservationContext";

const ClasesPage = () => {
  const { isAuthenticated } = useContext(ReservationContext);
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, router]);

  return (
    <>
      <NavBar />
      <ListadoClases />
    </>
  );
};

export default ClasesPage;
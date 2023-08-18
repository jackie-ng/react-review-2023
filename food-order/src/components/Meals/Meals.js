import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";
import Modal from '../UI/Modal'

function Meals() {
  return (
    <Modal>
      <MealsSummary/>
      <AvailableMeals/>
    </Modal>
   );
}

export default Meals;

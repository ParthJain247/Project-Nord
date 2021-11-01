import "./App.css";
import {
  Inject,
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
} from "@syncfusion/ej2-react-schedule";

function Calender() {
  return (
    <ScheduleComponent style={{ color: "black" }} currentView="Month">
      <Inject
        style={{ color: "black" }}
        services={[Day, Week, WorkWeek, Month, Agenda]}
      />
    </ScheduleComponent>
  );
}

export default Calender;

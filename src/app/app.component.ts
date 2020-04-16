import { Component } from "@angular/core";
import { User } from "./user";
import { EnrollmentService } from "./enrollment.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "TDFProject";
  topics = ["Angular", "React", "Vue"];
  userModel = new User(
    "Rob",
    "rob@gmail.com",
    9483208449,
    "default",
    "morning",
    true
  );
  topicHasError = true;
  submitted = false;
  errorMesaage = "";
  constructor(private enrollmentService: EnrollmentService) {}

  validateTopic(value) {
    if (value === "default") {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }

  onSubmit() {
    console.log(this.userModel);
    this.submitted = true;
    this.enrollmentService.enroll(this.userModel).subscribe(
      data => console.log("Success!!!", data),
      error => {
        (this.errorMesaage = error.statusText),
          console.error("Error!!!", error);
      }
    );
  }
}

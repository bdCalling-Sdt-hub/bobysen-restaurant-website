import Swal from "sweetalert2";

export const Success_model = (message) => {
  return Swal.fire({
    position: "center",
    icon: "success",
    title: message.title || "Successfully!!!",
    text: message.text || "",
    showConfirmButton: false,
    timer: 4000,
  });
};

export const Error_Modal = (message) => {
  return Swal.fire({
    position: "center",
    icon: "error",
    title: message || "Failed!!!",
    text: message.text || "",
    showConfirmButton: false,
    timer: 2000,
  });
};

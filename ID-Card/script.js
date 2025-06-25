// Upload Avatar
const upload = document.getElementById("upload");
const avatarImg = document.getElementById("avatar-img");

upload.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    avatarImg.src = reader.result;
  };
  reader.readAsDataURL(file);
});
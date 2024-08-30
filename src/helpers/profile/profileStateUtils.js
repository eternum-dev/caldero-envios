export const updateProfileField = (setProfile, currentItem, inputField) => {
  setProfile((prev) => {
    return { ...prev, [inputField]: currentItem };
  });
};

export const handleImageChange = (event, setPicture) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onloadend = () => {
      setPicture(reader.result);
    };
    reader.readAsDataURL(file);
  }
};

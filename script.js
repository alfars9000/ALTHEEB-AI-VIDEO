document.querySelector(".create-form")?.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("فكرة الذيب AI جاهزة… هنا مستقبلاً تربط الـ Backend 😉");
});
document.getElementById("videoForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const form = e.target;
  const data = {
    title: form.querySelector('input[type="text"]').value,
    duration: form.querySelector('input[type="number"]').value,
    language: form.querySelectorAll('select')[0].value,
    contentType: form.querySelectorAll('select')[1].value,
    tone: form.querySelectorAll('select')[2].value,
    autoUpload: form.querySelector('input[type="checkbox"]').checked
  };

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    const result = await response.json();
    alert("تم إرسال البيانات بنجاح! ✅\n" + JSON.stringify(result, null, 2));
  } catch (err) {
    alert("حدث خطأ أثناء الإرسال ❌");
    console.error(err);
  }
});

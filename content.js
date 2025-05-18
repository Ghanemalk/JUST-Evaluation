function fillRadioButtons() {
    const radioGroups = document.querySelectorAll('input[type="radio"]');
    const maxRatingRadios = Array.from(radioGroups).filter(radio => 
      radio.value.includes("10") && radio.name.includes("ansRBL")
    );
  
    if (maxRatingRadios.length === 0) {
      console.log("لم يتم العثور على خيارات تقييم.");
      tryClickEvaluateButton();
      return;
    }
  
    maxRatingRadios.forEach(radio => {
      radio.checked = true;
    });
    console.log("تم تعبئة التقييمات بـ 10 لكل سؤال!");
  }
  
  function fillTextAreas(text = "كل شيء ممتاز، شكرًا للمجهود الرائع!") {
    const textAreas = document.querySelectorAll('textarea');
  
    if (textAreas.length === 0) {
      console.log("لا يوجد حقول نصية (textarea) في الصفحة.");
      tryClickEvaluateButton();
      return;
    }
  
    textAreas.forEach(textarea => {
      textarea.value = text;
      const event = new Event('input', { bubbles: true });
      textarea.dispatchEvent(event);
    });
  
    console.log(`تم تعبئة الحقول النصية بالنص: "${text}"`);
  
    setTimeout(() => {
      const saveButton = document.querySelector("#ctl00_contentPH_saveBTN");
      if (saveButton) {
        saveButton.click();
        console.log("تم الضغط على زر الحفظ.");
      } else {
        console.log("زر الحفظ غير موجود.");
      }
    }, 100);
  }
  
  function tryClickEvaluateButton() {
    const evalButton = document.querySelector("#ctl00_contentPH_stuProgGV_ctl02_btnEvaluate");
    if (evalButton) {
      evalButton.click();
      console.log("تم الضغط على زر التقييم.");
    } else {
      console.log("زر التقييم غير موجود.");
    }
  }
  
  // تشغيل السكربت بعد تحميل الصفحة بالكامل
  window.addEventListener("load", () => {
    fillRadioButtons();
    fillTextAreas();
  });
  
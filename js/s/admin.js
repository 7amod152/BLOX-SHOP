function addProduct() {
  const name = prompt('اسم المنتج:');
  const description = prompt('وصف المنتج:');
  if (name && description) {
    alert(`تمت إضافة المنتج: ${name}`);
    // يمكن ربط هذا بجلب/حفظ بيانات حقيقية
  }
}

function deleteProduct() {
  const name = prompt('اسم المنتج المراد حذفه:');
  if (name) {
    alert(`تم حذف المنتج: ${name}`);
    // يمكن ربط هذا بحذف فعلي من قاعدة بيانات أو ملف
  }
}

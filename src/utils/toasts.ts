
let toastController: HTMLXuiToastControllerElement

export const init = async ({ toastCtrl }) => {
  toastController = await toastCtrl.componentOnReady();
};

export const showToast = async ({ text }: { text: string }) => {
  while (!toastController) {
    await wait(10)
  }

  const toast = await toastController.message({
    text
  })

  return toast;
};

async function wait(timeout: number) {
  return new Promise((res) => setTimeout(() => res(), timeout))
}

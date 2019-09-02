import { type } from '../components/callout/callout.type';

let toastController: HTMLXuiToastControllerElement

export const init = async ({ toastCtrl }) => {
  toastController = await toastCtrl.componentOnReady();
};

export const message = async ({ text, type }: { 
  text: string,
  type: type | null,
}) => {
  while (!toastController) {
    await wait(10)
  }

  const toast = await toastController.message({ text, type})

  return toast;
};

export const info = async (text: string) => message({ text, type: 'info' })
export const success = async (text: string) => message({ text, type: 'success' })
export const error = async (text: string) => message({ text, type: 'danger' })

async function wait(timeout: number) {
  return new Promise((res) => setTimeout(() => res(), timeout))
}

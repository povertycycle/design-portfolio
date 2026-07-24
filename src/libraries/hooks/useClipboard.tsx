export const useClipboard = (
    text: string,
    successMessage: string = "Text successfully copied"
) => {
    async function copy(): Promise<string> {
        return new Promise((resolve, reject) => {
            if (!navigator.clipboard) {
                const textArea = document.createElement("textarea");
                textArea.value = text;
                textArea.style.top = textArea.style.left = "0";
                textArea.style.position = "fixed";
                document.body.appendChild(textArea);
                textArea.focus();
                textArea.select();

                try {
                    document.execCommand("copy");
                    resolve(successMessage);
                } catch (err) {
                    reject("Exec command copy is not available in the browser");
                }

                document.body.removeChild(textArea);
            } else {
                navigator.clipboard
                    .writeText(text)
                    .then(() => {
                        resolve(successMessage);
                    })
                    .catch(() => {
                        reject("Unable to write text into navigator");
                    });
            }
        });
    }

    return copy;
};

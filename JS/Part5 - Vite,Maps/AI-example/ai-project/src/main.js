const input = document.getElementById("input");
const traducido = document.getElementById("traducido");
const resumido = document.getElementById("resumido");
const lang = document.getElementById("lang");
const btnTraducir = document.getElementById("btnTraducir");
const btnResmuir = document.getElementById("btnResumir");


async function detectLanguage(text) {
  const detector = await LanguageDetector.create({
    expectedInputLanguages: ["en", "es", "de", "fr"],
  });
  const results = await detector?.detect(text);
  return results[0]?.detectedLanguage ?? "en";
}

async function translate(text, input, traducido) {
  const translator = await Translator.create({
    sourceLanguage: input,
    targetLanguage: traducido,
  });
  return await translator.translate(text);
}



btnTraducir.addEventListener("click", async () => {
  btnTraducir.disabled = true;
  try {
    const text = input.value;
    const inputLang = await detectLanguage(text);
    const traducidoLang = lang.value;
    traducido.value = await translate(text, inputLang, traducidoLang);
  } catch (error) {
    traducido.value = error.toString();
  } finally {
    btnTraducir.disabled = false;
  }
});

/* async function translate(text, input, traducido) {
  const translator = await Translator.create({
    sourceLanguage: input,
    targetLanguage: traducido,
  });
  return translator.translateStreaming(text);
}
button.addEventListener("click", async () => {
  button.disabled = true;
  try {
    const text = input.value;
    const inputLang = await detectLanguage(text);
    const traducidoLang = lang.value;
    const stream = await translate(text, inputLang, traducidoLang);
    traducido.value = "";
    for await (const chunk of stream) {
      console.log(chunk);
      traducido.value += chunk;
    }
  } catch (error) {
    traducido.value = error.toString();
  } finally {
    button.disabled = false;
  }
}); */


async function summarize(text) {
  const summarizer = await Summarizer.create({
    sharedContext:
      "A general summary to help a user decide if the text is worth reading",
    type: "tldr",
    length: "short",
    format: "plain-text",
    expectedInputLanguages: ["en", "es"],
    outputLanguage: "es",
  });

  return await summarizer.summarize(text);
}

btnResmuir.addEventListener("click", async () => {
  btnResmuir.disabled = true;
  try {
    const text = input.value;
    resumido.value = await summarize(text, lang.value);
    
  } catch (error) {
    resumido.value = error.toString();
    
  } finally {
    btnResmuir.disabled = false;
  }
});
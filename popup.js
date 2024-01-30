const messages = [

  "Sanskrit:\nजातस्य हि ध्रुवो मृत्युर्ध्रुवं जन्म मृतस्य च। \nतस्मादपरिहार्येऽर्थे न त्वं शोचितुमर्हसि॥\n\nTranslation:\nDeath is certain for the born, and re-birth is certain for the dead therefore you should not feel grief for what is inevitable. ",
  "Sanskrit:\nप्रारब्धं भुज्यमानो हि गीताभ्यासरतः सदा। \nस मुक्तः स सुखी लोके कर्मणा नोपलिप्यते || \n\nTranslation:\nOne who indulges in ongoing action and is engaged in regular study of the gītā,is free and happy in this world and is not bound by karma.",
  "Sanskrit:\nदेहिनोऽस्मिन्यथा देहे कौमारं यौवनं जरा। \nतथा देहान्तरप्राप्तिर्धीरस्तत्र न मुह्यति॥\n\nTranslation:\nJust as the boyhood, youth and old age come to the embodied Soul in this body, in the same manner, is the attaining of another body; the wise man is not deluded at that",
  "Sanskrit:\nय एनं वेत्ति हन्तारं यश्चैनं मन्यते हतम्।]\nउभौ तौ न विजानीतो नायं हन्ति न हन्यते||\n\nTranslation:\nHe who thinks that the soul kills, and he who thinks of it as killed, are both ignorant. The soul kills not, nor is it killed",
  "Sanskrit:\nन जायते म्रियते वा कदाचिन्|\n नायं भूत्वा भविता वा न भूयः।\n अजो नित्यः शाश्वतोऽयं पुराणो|\n\nTranslation:\n न हन्यते हन्यमाने शरीरे॥ The soul is never born, it never dies having come into being once, it never ceases to be.Unborn, eternal, abiding and primeval, it is not slain when the body is slain.",
  "Sanskrit:\nसुखदुःखे समे कृत्वा लाभालाभौ जयाजयौ।\nततो युद्धाय युज्यस्व नैवं पापमवाप्स्यसि॥ \n\nTranslation:\nHolding pleasure and pain, gain and loss, victory and defeat as alike, gird yourself up for the battle.Thus, you shall not incur any sin.",
  "Sanskrit:\nकर्मण्येवाधिकारस्ते मा फलेषु कदाचन। \nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥ \n\nTranslation:\nTo work alone you have the right, and not to the fruits. Do not be impelled by the fruits of work.Nor have attachment to inaction.",
  "Sanskrit:\nयदा संहरते चायं कूर्मोऽङ्गानीव सर्वशः।\nइन्द्रियाणीन्द्रियार्थेभ्यस्तस्य प्रज्ञा प्रतिष्ठिता॥\n\nTranslation:\nOne who is able to withdraw the senses from their objects,just as a tortoise withdraws its limbs into its shell, is established in divine wisdom.",
  "Sanskrit:\nक्रोधाद्भवति सम्मोहः सम्मोहात्स्मृतिविभ्रमः।\nस्मृतिभ्रंशाद् बुद्धिनाशो बुद्धिनाशात्प्रणश्यति॥\n\nTranslation:\nFrom anger there comes delusion; from delusion, the loss of memory; from the loss of memory,the destruction of discrimination; and with the destruction of discrimination, he is lost.",
  "Sanskrit:\nइन्द्रियाणि पराण्याहुरिन्द्रियेभ्यः परं मनः।\nमनसस्तु परा बुद्धिर्यो बुद्धेः परतस्तु सः॥\n\nTranslation:\nThe senses are superior to the gross body, and superior to the senses is the mind.Beyond the mind is the intellect, and even beyond the intellect is the soul."
];

let remainingMessages = [...messages];

function showRandomMessage() {
  if (remainingMessages.length === 0) {
    // If all messages have been shown, reset the array
    remainingMessages = [...messages];
  }

  // Get a random index within the remainingMessages array
  const randomIndex = Math.floor(Math.random() * remainingMessages.length);

  // Display the randomly selected message
  alert(remainingMessages[randomIndex]);

  // Remove the displayed message from the remainingMessages array
  remainingMessages.splice(randomIndex, 1);
}

document.addEventListener("click", showRandomMessage);

 // Q&A System Guidelines
 document.getElementById('guidelinesBtn').addEventListener('click', function() {
    alert("Q&A SYSTEM GUIDELINES:\n\n" +
        "1. Select a question from the dropdown menu\n" +
        "2. Click 'Submit' to get the answer\n" +
        "3. Use the translation buttons to convert the answer to Chinese\n" +
        "4. The system will automatically analyze the sentiment of each answer\n\n" +
        "Note: This is a demonstration system with pre-defined answers.");
});

document.addEventListener('DOMContentLoaded', function() {
    // Sample answers
    const answers = {
        "1": "Tokenization breaks down text into smaller units (tokens) that can be processed by the LLM. This is crucial for converting raw text into a format the model can understand. For English, tokens are typically words or subwords, while for Chinese, each character is usually a separate token.",
        "2": "Large language models excel at chatbots because they can understand context over long conversations, generate human-like responses, adapt to different styles, and leverage vast knowledge from their training data. Traditional rule-based chatbots were limited to predefined responses.",
        "3": "Traditional methods struggle with ambiguity, context, and scalability. They require extensive manual rule-writing for each language and task, cannot handle unseen phrases well, and lack the ability to understand nuanced meaning.",
        "4": "Word embedding is a technique where words are mapped to vectors of real numbers. These vectors capture semantic relationships - similar words are closer in the vector space. Modern LLMs use contextual embeddings where word representations change based on usage.",
        "5": "The Attention Mechanism allows the model to focus on different parts of the input text when processing each word. It weighs the importance of each word in context, enabling better understanding of relationships between words."
    };
    
    // Sample translations
    const translations = {
        "1": {
            "traditional": "分詞在大型語言模型處理中的角色是將文本分解為模型可以處理的較小單位（詞元）。這對於將原始文本轉換為模型能夠理解的格式至關重要。",
            "simplified": "分词在大型语言模型处理中的角色是将文本分解为模型可以处理的较小单位（词元）。这对于将原始文本转换为模型能够理解的格式至关重要。"
        },
        "2": {
            "traditional": "大型語言模型在聊天機器人方面表現出色，因為它們能夠理解長時間對話的上下文，生成類人的回應，適應不同的風格，並利用訓練數據中的廣泛知識。",
            "simplified": "大型语言模型在聊天机器人方面表现出色，因为它们能够理解长时间对话的上下文，生成类人的回应，适应不同的风格，并利用训练数据中的广泛知识。"
        },
        "3": {
            "traditional": "傳統方法難以處理歧義性、上下文和擴展性。它們需要為每種語言和任務編寫大量手動規則，無法很好地處理未見過的短語，並且缺乏理解細微意義的能力。",
            "simplified": "传统方法难以处理歧义性、上下文和扩展性。它们需要为每种语言和任务编写大量手动规则，无法很好地处理未见过的短语，并且缺乏理解细微意义的能力。"
        },
        "4": {
            "traditional": "詞嵌入是一種將詞語映射到實數向量的技術。這些向量捕捉語義關係——相似的詞在向量空間中更接近。現代LLM使用上下文嵌入，其中詞表示根據使用情況而變化。",
            "simplified": "词嵌入是一种将词语映射到实数向量的技术。这些向量捕捉语义关系——相似的词在向量空间中更接近。现代LLM使用上下文嵌入，其中词表示根据使用情况而变化。"
        },
        "5": {
            "traditional": "注意力機制允許模型在處理每個詞時專注於輸入文本的不同部分。它根據上下文衡量每個詞的重要性，從而能夠更好地理解詞之間的關係。",
            "simplified": "注意力机制允许模型在处理每个词时专注于输入文本的不同部分。它根据上下文衡量每个词的重要性，从而能够更好地理解词之间的关系。"
        }
    };
    
    // Sentiment analysis
    const sentiments = {
        "1": "neutral",
        "2": "positive",
        "3": "negative",
        "4": "neutral",
        "5": "neutral"
    };
    
    // Get DOM elements
    const questionSelect = document.getElementById('questionSelect');
    const submitBtn = document.getElementById('submitBtn');
    const answerDiv = document.getElementById('answer');
    const translateToTraditionalBtn = document.getElementById('translateToTraditionalBtn');
    const translateToSimpleBtn = document.getElementById('translateToSimpleBtn');
    const translationDiv = document.getElementById('translation');
    const sentimentResult = document.getElementById('sentimentResult');
    
    // Event listeners
    submitBtn.addEventListener('click', function() {
        const selectedValue = questionSelect.value;
        
        if (!selectedValue) {
            alert('Please select a question first!');
            return;
        }
        
        // Display answer
        answerDiv.innerHTML = `<p>${answers[selectedValue]}</p>`;
        
        // Enable translation buttons
        translateToTraditionalBtn.disabled = false;
        translateToSimpleBtn.disabled = false;
        
        // Clear previous translation
        translationDiv.innerHTML = '';
        
        // Show sentiment analysis
        const sentiment = sentiments[selectedValue];
        sentimentResult.textContent = `The answer has a ${sentiment} tone.`;
    });
    
    translateToTraditionalBtn.addEventListener('click', function() {
        const selectedValue = questionSelect.value;
        translationDiv.innerHTML = `<p>${translations[selectedValue]["traditional"]}</p>`;
    });
    
    translateToSimpleBtn.addEventListener('click', function() {
        const selectedValue = questionSelect.value;
        translationDiv.innerHTML = `<p>${translations[selectedValue]["simplified"]}</p>`;
    });
});

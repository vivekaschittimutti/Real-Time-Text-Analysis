import React, { useState } from 'react';
import { Container,Title,Textarea,Stats,ReplaceSection,Input,Button } from "./styledComponents";

function App() {
  const [text, setText] = useState('');
  const [uniqueWords, setUniqueWords] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [searchString, setSearchString] = useState('');
  const [replaceString, setReplaceString] = useState('');

  
  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    updateStatistics(newText);
  };

  
  const updateStatistics = (input) => {
    const words = input.toLowerCase().match(/\b\w+\b/g) || [];
    const uniqueWordsSet = new Set(words);
    setUniqueWords(uniqueWordsSet.size);

    const charCount = input.replace(/[^a-zA-Z0-9]/g, '').length;
    setCharCount(charCount);
  };

  
  const handleReplace = () => {
    const updatedText = text.replaceAll(searchString, replaceString);
    setText(updatedText);
    updateStatistics(updatedText);

    setSearchString('');
    setReplaceString('');
  };

  return (
    <Container>
      <Title>Real-Time Text Analysis and String Replacement</Title>

      <Textarea
        value={text}
        onChange={handleTextChange}
        placeholder="Type your text here..."
      />

      <Stats>
        <p><strong>Unique Words:</strong> {uniqueWords}</p>
        <p><strong>Character Count (Excluding Spaces and Punctuation):</strong> {charCount}</p>
      </Stats>

      <ReplaceSection>
        <Input
          type="text"
          placeholder="String to search"
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
        />

        <Input
          type="text"
          placeholder="String to replace"
          value={replaceString}
          onChange={(e) => setReplaceString(e.target.value)}
        />

        <Button onClick={handleReplace}>Replace All</Button>
      </ReplaceSection>
    </Container>
  );
}

export default App;

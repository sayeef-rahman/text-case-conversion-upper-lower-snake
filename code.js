  //   camel case to title cse
  const camelToTitle = (text) => {
    const result = text.replace(/([A-Z])/g, " $1");
    const finalResult = result.charAt(0).toUpperCase() + result.slice(1);
    return finalResult;
  };
  // console.log(camelToTitle("helloThereMister"));

  // snake case to title case
  const titleCase = (s) =>
    s.replace(/^_*(.)|_+(.)/g, (s, c, d) =>
      c ? c.toUpperCase() : " " + d.toLowerCase()
    );
  // console.log(titleCase("_big_animal___with_more_Nodes"));

  // snake case to sentence case
  const sentenceCase = (s) =>
    s.replace(/^_*(.)|_+(.)/g, (s, c, d) =>
      c ? c.toUpperCase() : " " + d.toUpperCase()
    );
  // console.log(sentenceCase("_big_animal___with_more_Nodes"));

  // snake case to sentence case
  // const sentenceCase = (s) =>
  //   s.replace(/^_*(.)|_+(.)/g, (s, c, d) =>
  //     c ? c.toUpperCase() : " " + d.toUpperCase()
  //   );
  console.log(sentenceCase("_big_animal___with_more_Nodes"));
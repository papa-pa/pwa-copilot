import React from 'react';

export default function ModelGenerationSelect({ model, value, onChange }) {
  // Exemple d'années de mise en service par modèle (à compléter selon besoin)
  // const serviceGenerationByModel = {
  //   'Template': ['1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'],
  //   'CL': ['1997', '1998', '1999', '2001', '2002', '2003'],
  //   'CSX': ['2006', '2007', '2008', '2009', '2010', '2011'],
  //   'EL': ['1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005'],
  //   'ILX': ['2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'],
  //   'Integra': ['1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001'],
  //   'Legend': ['1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995'],
  //   'MDX': ['2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'],
  //   'NSX': ['1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'],
  //   'RDX': ['2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'],
  //   'RL': ['1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012'],
  //   'RLX': ['2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'],

    
  //   'Corolla': ['2010', '2012', '2015', '2018', '2021'],
  //   'Golf': ['2009', '2013', '2017', '2020'],
  //   'Civic': ['2011', '2014', '2017', '2020'],
  //   'Model S': ['2012', '2016', '2020'],
  //   // ... ajoutez d'autres modèles et années si besoin
  // };

  const serviceGenerationByModel = {
    'Torpedo': ['20-30 HP 1920'],
    'Giulia':
      [
        'Phase I Multijet (2015)',
        'Phase I Multijet Q4 (2015)',
        'Phase I Turbo (2015)',
        'Phase I Quadrifoglio (2015)',
        'Phase II Multijet (2019)',
        'Phase II Multijet Q4 (2019)',
        'Phase II Turbo (2019)',
        'Phase II Quadrifoglio (2019)',
        'Phase III Multijet (2022)',
        'Phase III Multijet Q4 (2022)',
        'Phase III Turbo (2022)',
        'Phase III Quadrifoglio (2022)',
      ],
    'Junior':
      [
        'Phase I Elettrica (2024)',
        'Phase I Elettrica Veloce (2024)',
        'Phase I Ibrida (2024)',
        'Phase I Ibrida Q4 (2024)',
      ],
    'Tonale':
      [
        'Phase I Hybrid 130ch (2022)',
        'Phase I Hybrid 160ch (2022)',
      ],
    'Stelvio': 
      [
        'Phase I (2017)',
        'Phase I Turbo (2017)',
        'Phase I Quadrifoglio (2017)',
        'Phase II (2019)',
        'Phase II Turbo (2019)',
        'Phase II Quadrifoglio (2019)',
        'Phase III (2022)',
        'Phase III Turbo (2022)',
        'Phase III Quadrifoglio (2022)',
      ],

    
    'Corolla': ['2010', '2012', '2015', '2018', '2021'],
    'Golf': ['2009', '2013', '2017', '2020'],
    'Civic': ['2011', '2014', '2017', '2020'],
    'Model S': ['2012', '2016', '2020'],
    // ... ajoutez d'autres modèles et années si besoin
  };
  const availableServiceModel = model && serviceGenerationByModel[model] ? serviceGenerationByModel[model] : [];

  return (
    <div style={{marginTop: '1rem'}}>
      <label htmlFor="service-generation-select">Génération/Phase : </label>
      <select
        id="service-generation-select"
        value={value}
        onChange={onChange}
        required
        disabled={!model}
      >
        <option value="">-- Sélectionnez une génération --</option>
        {availableServiceModel.map((generation) => (
          <option key={generation} value={generation}>{generation}</option>
        ))}
      </select>
    </div>
  );
}
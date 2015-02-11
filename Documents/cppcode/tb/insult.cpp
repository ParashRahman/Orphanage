#include <iostream>
#include <vector>
#include <string>

class Insult {
private:  
  // update size of this when adding insult types
  std::vector<int> insult_types(4, 0);
  std::vector<std::string> words_needed;

  // @av = adverb
  // @aj = adjective
  // @n = noun
  // @p = preposition
  // @v = verb
  // @% = wildcard
  std::string template_string;
  bool check_template_validity( std:string strtemp );
  void parse_template();

public:
  // update insult_types when adding insult types
  const int RACIST = 0;
  const int HOMOPHOBIC = 1;
  const int SEXUAL = 2;
  const int RELIGIOUS = 3;

  Insult();
  ~Insult();
  std::string plug_and_chug(std::vector<std::string> words);
  std::string get_template();
  std::vector<std::string> get_requirements();
};

// Throws Err No. 20 for template failures. 
Insult::Insult( std::string strtemplate, vector<int> instypes ){
  // set the insult types for the constructor
  for ( int i = 0; i < instypes.size(); i++ ){
    insult_types[ instypes[i] ] = 1;
  }

  // set the string template for the constructor
  if ( check_template_validity( strtemplate ) ){
    template_string = strtemplate;
  } else {
    throw 20;
  }
}

Insult::~Insult(){
}

bool Insult::check_template_validity( std::string strtemp ){
  std::string possibles[5] = {"av", "aj", "v", "n", "p", "%"};

  for ( int i = 0; i < strtemp.size() - 1; i++ ){
    if ( strtemp[i] == '@' ) {
      bool match = false;

      for( int p = 0; p < possibles.size(); p++ ){
	if ( possibles[p][0] == strtemp[i+1] ){
	  match = true;
	}
      }
      
      if ( match == false && strtemp[i+1] == 'a'){
	if( i+2 != strtemp.size() ){
	  if ( strtemp[i+2] == 'v' || strtemp[i+2] == 'j' ){
	    match = true;
	  }
	}
      }

      if (!match){
	return false;
      }

    }
  }

  return true;
}

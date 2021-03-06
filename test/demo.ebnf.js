/*

letter = "A" | "B" | "C" | "D" | "E" | "F" | "G"
       | "H" | "I" | "J" | "K" | "L" | "M" | "N"
       | "O" | "P" | "Q" | "R" | "S" | "T" | "U"
       | "V" | "W" | "X" | "Y" | "Z" ;
digit = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" ;
symbol = "[" | "]" | "{" | "}" | "(" | ")" | "<" | ">"
       | "'" | '"' | "=" | "|" | "." | "," | ";" ;
character = letter | digit | symbol | any ;

any = ? any visible character ?
 
identifier = letter , { letter | digit | "_" } ;
terminal = "'" , character , { character } , "'" 
         | '"' , character , { character } , '"' ;
 
lhs = identifier ;

rhs = identifier , [ rightmost ]
     | terminal  , [ rightmost ]
     | "[" , rhs , "]" , [ rightmost ]
     | "{" , rhs , "}" , [ rightmost ] 
     | "(" , rhs , ")" , [ rightmost ];

rightmost = ("|" , ",") , rhs ;
 
rule = lhs , "=" , rhs , ";" ;
grammar = { rule } ;

*/
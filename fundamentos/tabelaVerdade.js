/* v e v -> v
   v e f -> f
   f e ? -> f

'e' só é VERDADEIRO se todos os operandos forem verdadeiros

   v ou ? -> v
   f ou v -> v
   f ou f -> f

'ou' só é FALSO se todos os operandos forem falsos

   v xor v -> f
   v xor f -> v
   f xor f -> f
   f xor v -> v

'xor' (ou exclusivo) só será verdadeiros se os operandos forem diferentes
   
!v -> f
!f -> v
*/
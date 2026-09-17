# Testeo sintético — Family Guardians

**Fecha:** 2026-09-16
**Método:** walkthrough con agentes sintéticos en carácter, contra el prototipo real en UAT (`https://uat.skandia.co/simulador-pensional`)
**Muestra:** acotada a 2 de 5 personas por restricción de presupuesto de tokens — **Roberto la pareja pre-jubilación** y **Hernando el abuelo patriarca Elite Wealth**. Quedaron fuera: Camilo el padre planificador digital, María Fernanda la ejecutiva protectora Privilegio, Alejandra la madre soltera resiliente.
**Nota metodológica:** walkthrough sintético, no sesión con usuario real.

## Persona: Hernando Restrepo Villegas

60 años, empresario textil semi-retirado en Medellín, casado con Marta (58 años), tres hijos y cinco nietos. Pasó su vida armando un patrimonio para *"que a los míos no les toque empezar de cero"*, tiene asesor patrimonial de confianza en Skandia y revisa personalmente cada documento antes de firmar.

**Veredicto rápido:** el simulador es técnicamente completo (compara RAIS vs RPM, permite aportes voluntarios, recalcula en vivo) pero le pregunta por su beneficiario principal en el Paso 1 con una sub-sección dedicada y **nunca vuelve a mencionarlo en el resultado** — para un patriarca cuyo eje es el legado, se siente como una pregunta que se perdió en el camino. El cierre es genérico, sin puente hacia su asesor.

### Hallazgos por paso

**Paso 0:** *"espero que me pida cosas de mi familia, porque al final esto también es para ellos, no solo para mí."*

**Paso 1 (HS6):** al seleccionar "Cónyuge" como beneficiario, el formulario despliega una sub-sección con tres campos obligatorios adicionales sobre Marta (fecha de nacimiento, género, estado). Hernando piensa: *"qué bien, esto sí se está tomando en serio a mi familia, seguro esto afecta el cálculo."* Genera una expectativa fuerte de que el dato importará.

**Paso 2 (H1):** con acceso a su asesor y registros propios, completa todo sin dificultad real de datos. La fricción que sí encontró fue de otro tipo (ver hallazgo no anticipado).

**Paso 3:** distribuye los años entre fondos con más peso en Conservador, coherente con su perfil. El sistema validó correctamente antes de habilitar "Simular".

**Paso 4 (HS6 y H5) — el hallazgo central de este reporte:** revisó línea por línea el texto completo del detalle y de "Resumen". **En ningún momento se menciona la palabra "beneficiario", "Cónyuge" ni el nombre de Marta.** El dato que llenó con tanto cuidado en el Paso 1 —incluida la fecha de nacimiento de su esposa— desaparece del relato. Cita: *"les di hasta la fecha de nacimiento de mi esposa y ni la mencionan al final... ¿entonces para qué me la pidieron?"*. El cierre son solo "Volver" y "Generar PDF" — sin enlace a su asesor ni mención de su condición Elite Wealth: *"para esto no necesitaba ser cliente Elite, esto se lo dan a cualquiera."*

**Aportes voluntarios:** el cálculo apareció correctamente en un recuadro nuevo, pero **la cifra principal de la tarjeta superior no se actualizó** — quinta confirmación independiente de este defecto.

### Hipótesis

| Hipótesis | Veredicto |
|---|---|
| HS6 (el beneficiario declarado reaparece en el resultado) | **Refutada, con evidencia directa y textual** — se pide con tres campos obligatorios adicionales y nunca vuelve a aparecer |
| H5 (cierre proporcional al nivel de servicio Elite Wealth) | **Confirmada como brecha** — solo "Volver"/"Generar PDF", sin CTA de asesor |
| H1 (disponibilidad de los datos históricos exigidos) | **Parcial** — para este perfil (con asesor y registros propios) fue viable; la fricción fue de robustez del formulario, no de disponibilidad del dato |

### Rúbrica Skandia

| Sencillez | Facilidad | Integralidad | Memorabilidad |
|---|---|---|---|
| 3 | 2 | 3 | 2 |

*Facilidad en 2/4*: ver hallazgo no anticipado — el formulario mostró comportamiento inestable en vivo.

### Hallazgo descartado — no es un defecto del producto

Una observación inicial registró valores inesperados y transitorios en el formulario durante la evaluación. Al cruzarla con el reporte independiente de Ricardo (Capital Investor, evaluado en paralelo), se confirmó que el origen era un artefacto del proceso de evaluación en paralelo, no un comportamiento del prototipo. Los datos de Marta/Hernando finalmente persistidos en el formulario sí eran correctos. No se escala como hallazgo de producto.

---

## Persona: Roberto

56 años, técnico de mantenimiento industrial, casado con Marlene hace 28 años, sin hijos dependientes. Cree estar "a un par de años" de pensionarse y quiere confirmar que no se equivocó al quedarse en el fondo privado.

**Veredicto rápido:** el simulador entrega una cifra y una comparación RAIS/RPM claras, pero dos huecos críticos para este segmento: (1) **nunca aclara si aún puede cambiarse de régimen** ni menciona el vencimiento del traslado (16-jul-2026), y (2) el beneficiario/cónyuge capturado en el Paso 1 desaparece por completo del resultado — ni siquiera se le pide un nombre. Para un perfil que decide en función de la familia y teme equivocarse, se siente más como una calculadora fría que como un acompañamiento.

### Hallazgos por paso

**Paso 0:** sabe que está en RAIS por el extracto de Skandia, pero no tiene 100% certeza de si en algún momento se pudo haber cambiado — su esposa se lo ha preguntado más de una vez. Le pesa la fecha: siente que se acerca el momento y no quiere equivocarse.

**Paso 1:** al elegir "Cónyuge", el sub-formulario pide fecha de nacimiento, género y estado — **sin ningún campo de nombre**. Nunca escribe el nombre de Marlene, solo su fecha como dato demográfico de cálculo — *"solo un formulario más"*, sin sensación de estar protegiendo a la familia. **Hallazgo técnico confirmado por tercera vez** (ya visto en la heurística original y en otras sesiones): escribir la fecha directamente en el campo la muestra visualmente correcta pero **no la registra el formulario reactivo** — persiste "Selecciona la fecha de nacimiento" y "Tu edad hoy: 0 años" hasta usar el calendario emergente.

**Paso 2 (H1):** sabe su salario de memoria, pero para semanas cotizadas y saldo exacto tendría que revisar su extracto — sin ningún atajo de consulta automática.

**Paso 3:** texto real: *"La edad mínima de ley en tu caso es 62 años. Te faltan 6 años."* — choca con su idea de estar "a 1-2 años" de pensionarse; ver el número concreto es un golpe emocional real para este segmento ansioso.

**Paso 4 (H2 — el hallazgo central de este reporte):** pregunta directa — *"¿sientes que todavía podrías cambiarte de régimen? ¿la pantalla te lo aclara?"* Respuesta: *"Pues... viendo esto pensaría que sí, que como me sale mejor Prima Media me podría pasar. Pero la pantalla en ningún momento me dice si puedo o no, ni hasta cuándo. Si no me lo dice, uno se queda con la duda y termina llamando a alguien, o simplemente no hace nada por miedo a meter la pata."*

**Verificación exhaustiva** (texto completo de las 4 pestañas de fidelidad, "Resumen", ambas descripciones de régimen, "Ver el alcance de la proyección" y el panel de aportes voluntarios): **en ningún lugar de la pantalla de resultado aparece la palabra "traslado", ninguna fecha límite, ni el 16 de julio de 2026.** Tampoco vuelve a mencionarse al beneficiario en ningún punto del resultado.

**Aportes voluntarios:** el círculo principal no cambió; el cálculo apareció correctamente en texto aparte — sexta confirmación independiente del mismo defecto.

**Cierre:** *"Con esto me quedo más tranquilo del monto, pero no de si tomé la decisión correcta de régimen ni de si todavía puedo corregirla. Yo llamaría a mi asesor de Skandia antes de firmar cualquier cosa, porque la pantalla no me lo despeja."*

### Hipótesis

| Hipótesis | Veredicto |
|---|---|
| H1 (conocimiento del régimen sí, cifras exactas no) | **Confirmada** |
| **H2 (no aclara si aún puede trasladarse / plazo vencido)** | **Confirmada con evidencia textual exhaustiva** — cero menciones a traslado, plazos o al 16-jul-2026 en las 4 pantallas de resultado |
| HS6 (continuidad del beneficiario en el resultado) | **Refutada** — no vuelve a aparecer, ni se le pide nombre |
| H5 (acceso a asesor humano desde el resultado) | **Refutada** — sin CTA de contacto |

### Rúbrica Skandia

| Sencillez | Facilidad | Integralidad | Memorabilidad |
|---|---|---|---|
| 2 | 2 | 1 | 2 |

*Integralidad en 1/4* — la nota más baja del testeo hasta ahora: omite la pregunta regulatoria más relevante para este perfil y pierde al beneficiario tras el Paso 1.

### Hallazgo no anticipado — riesgo operativo confirmado, no solo teórico

El agente reportó que, antes de aislar su sesión nombrada (`fg2-roberto`), la **sesión de navegador compartida por defecto mostró momentáneamente datos de otro perfil en curso** ("Hernando Restrepo Villegas") — confirma en la práctica el riesgo de colisión entre personas concurrentes que se advirtió al diseñar el testeo. Se resolvió correctamente antes de capturar evidencia; todas las citas de este informe provienen de la sesión aislada.

---

## ¿Qué confirma este segmento sobre H2, con más fuerza que ningún otro?

Family Guardians es, de los cinco segmentos testeados, el que produce la **evidencia más directa y textual** sobre H2: Roberto no solo no encuentra la aclaración — **cae él mismo en la trampa que el research anticipó**, concluyendo que podría cambiarse de régimen cuando esa ventana lleva dos meses cerrada. Es la confirmación más limpia de todo el sprint de que el hallazgo regulatorio del research no es una preocupación abstracta de cumplimiento: es un error de interpretación real que un usuario en la edad correcta comete al ver la pantalla tal como está hoy.

---

**Estado: COMPLETO — 2 de 2 personas de la muestra acotada.**

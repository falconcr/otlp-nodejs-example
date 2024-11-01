# Grafana

## Grafana es...

Grafana es una plataforma de visualización de datos y monitoreo ampliamente utilizada para representar métricas en tiempo real a través de gráficos, paneles interactivos y alertas personalizables. Diseñada para integrarse con una gran variedad de fuentes de datos (como Prometheus, InfluxDB, Elasticsearch, AWS CloudWatch, y más), Grafana ayuda a los equipos de DevOps, desarrolladores y administradores de sistemas a entender mejor el comportamiento de sus aplicaciones, infraestructura y redes.

¿Por Qué Usar Grafana?
Visualización en Tiempo Real: Permite crear paneles que muestran métricas en tiempo real, facilitando la detección de problemas o anomalías en la infraestructura.

Integración con Múltiples Fuentes de Datos: Grafana puede conectarse a diversas bases de datos y servicios, unificando toda la información en un solo lugar. Esto simplifica el monitoreo de sistemas complejos que dependen de varias fuentes de datos.

Alertas Personalizables: Se pueden configurar alertas basadas en condiciones específicas para que el equipo reciba notificaciones cuando ciertos valores superen o estén por debajo de los límites definidos.

Dashboards Interactivos y Personalizables: Los paneles se pueden diseñar según las necesidades del equipo o proyecto, permitiendo que cada usuario ajuste el diseño para obtener la información más relevante.

Open Source y Extensible: Al ser una plataforma de código abierto, Grafana tiene una comunidad activa que contribuye con plugins y mejoras, y también permite desarrollos personalizados.

Ejemplo de Uso
En una infraestructura de microservicios, donde cada servicio puede tener sus propias métricas de rendimiento (CPU, memoria, tiempos de respuesta), Grafana se puede usar para:

Monitorear métricas individuales de cada servicio a través de Prometheus, trazando gráficos en tiempo real que muestran la salud de cada componente.
Configurar alertas para situaciones críticas, como un aumento repentino de la latencia en uno de los servicios.
Analizar el rendimiento histórico para identificar tendencias y optimizar el sistema.
En resumen, Grafana es una herramienta poderosa y versátil para transformar datos en información visual clara, ayudando a los equipos a mejorar su capacidad de monitoreo y toma de decisiones en tiempo real.

## Instalar

- helm repo add grafana https://grafana.github.io/helm-charts
- helm repo update
- helm install grafana grafana/grafana -f grafana-values.yaml -n observability
- kubectl get secret --namespace observability grafana -o jsonpath="{.data.admin-password}" | base64 --decode
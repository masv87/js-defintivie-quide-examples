/**
 * Js was the original scripting language for the Web and <script> elements are, by default, assumed to contain or to
 * reference JS code. If you want to use nonstandard scripting language you must use the type attribute to specify
 * the script MIME type:
 **/
<script type='text/vbscript'>
  'vb script code here'
</script>
/**
 * The default value of the type attribute is "text/javascript"
 * When a web browser encounters a <script> element with a type attribute whose value it does not recoginse
 * it parses the element but does not attempt to display or execute that content.
 * If you specify a src attribute and an unknown type, the script will be ignored and nothing will be downloaded
 * from the url you specified
 **/
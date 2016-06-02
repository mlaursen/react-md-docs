#!/bin/bash

# Docgen doesn't work by reading the index.js file so need to manually choose files
# to run against..

files=(
  'Avatars/Avatar'
  'BottomNavigations/BottomNavigation'
  'Buttons/FlatButton'
  'Buttons/FloatingButton'
  'Buttons/IconButton'
  'Buttons/RaisedButton'
  'Cards/Card'
  'Cards/CardActionOverlay'
  'Cards/CardActions'
  'Cards/CardMedia'
  #'Cards/CardExpander'
  'Cards/CardText'
  'Cards/CardTitle'
  'Chips/Chip'
  'DataTables/DataTable'
  'DataTables/TableBody'
  'DataTables/TableColumn'
  'DataTables/TableHeader'
  'DataTables/TableRow'
  'DataTables/EditDialogColumn'
  'Dialogs/DialogContainer'
  'Dividers/Divider'
  'FABTransitions/SpeedDial'
  'FontIcons/FontIcon'
  'Inks/Ink'
  'Lists/List'
  'Lists/ListItem'
  'Lists/ListItemControl'
  'Menus/Menu'
  'NavigationDrawers/NavigationDrawer'
  'Papers/Paper'
  'Pickers/DatePickerContainer'
  'Pickers/TimePickerContainer'
  'Progress/CircularProgress'
  'Progress/LinearProgress'
  'SelectFields/SelectField'
  'SelectionControls/Checkbox'
  'SelectionControls/RadioGroup'
  'SelectionControls/Radio'
  'SelectionControls/Switch'
  'Sidebars/Sidebar'
  'Sliders/Slider'
  'Snackbars/Snackbar'
  'Subheaders/Subheader'
  'Tabs/Tab'
  'Tabs/Tabs'
  'TextFields/TextField'
  'Toolbars/Toolbar'
  'Tooltips/Tooltip'
)

for file in "${files[@]}"; do
  component=`echo $file | cut -d '/' -f 2`
  source=src/js/$file.js
  filesource=$source
  out=src/docgen/$component.json

  # Composed component.. Cheat a bit
  if [[ $component =~ ^(Ink|Tooltip) ]]; then
    filesource=src/js/${component}s/inject$component.js
    cp ../react-md/src/js/${component}s/inject$component.js ../react-md/$source
    sed -i 's/ComposedComponent => //' ../react-md/$source
  elif [[ $component =~ Picker ]]; then
    # Make a temp without the Container
    source=src/js/Pickers/.${component%Container}.js
    out=src/docgen/${component%Container}.json

    cp ../react-md/src/js/Pickers/${component}.js ../react-md/$source

    # Hack out DateTimeFormat since it doesn't like it for docgen
    sed -i 's/DateTimeFormat: DateTimeFormat,//' ../react-md/$source
  fi
  react-docgen ../react-md/$source --pretty --resolver findAllComponentDefinitions -o $out

  # Remove first line '['
  sed -i -e '1d' $out

  # Remove last line ']'
  sed -i -e '$ d' $out

  # Insert file path after first '{'
  sed -i -e 's#^  {#  {\'$'\n    "source": "'$filesource'",#' $out

  # Insert component name after first '{'
  sed -i -e 's/^  {/  {\'$'\n    "component": "'${component%Container}'",/' $out
  echo Created docgen at $out

  # Clean up temp files
  if [[ $component =~ (Ink|Tooltip|Picker) ]]; then
    rm ../react-md/$source
  fi
done

#rm src/docgen/*-e

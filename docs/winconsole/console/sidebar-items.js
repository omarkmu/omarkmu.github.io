initSidebarItems({"enum":[["CodePage","Represents a console code page."],["ConsoleColor","Represents supported console colors."]],"fn":[["beep","Generates a tone on the speaker."],["clear","Clears the console."],["clear_history","Clears the console input history."],["fill_character","Fills the console window with a specified character starting  at a specified location, and returns the number of cells which were filled.   Note that this only changes the character; the colors of each cell will remain the same."],["fill_colors","Fills the console window with a specified set of colors starting  at a specified location, and returns the number of cells which were filled.  "],["flush_input","Flushes the console input buffer."],["flush_output","Flushes the console output buffer."],["generate_ctrl_event","Sends a ctrl signal to a process group which shares the console."],["get_background_color","Returns the current background color of the console."],["get_buffer_size","Returns the size of the console output buffer."],["get_code_page_info","Returns a CodePageInfo object which contains information about the CodePage."],["get_color","Returns the RGB color value of a ConsoleColor."],["get_color_mapping","Returns the current color mapping for the console. The indices of the returned array correspond with ConsoleColor values."],["get_cursor_position","Returns the current position of the console cursor."],["get_cursor_size","Returns the size of the console cursor.   The size of the console cursor will always be between 0 and 100 (inclusive)."],["get_font","Returns information about the current console font."],["get_foreground_color","Returns the current foreground color of the console."],["get_history_info","Returns a HistoryInfo object containing information about console input history settings."],["get_input_code_page","Returns the input code page used by the console."],["get_input_mode","Returns settings related to console input."],["get_installed_code_pages","Returns a list of installed code pages."],["get_largest_window_size","Returns the size of the largest possible console window in character cells, based on the current font and the size of the display."],["get_original_title","Returns the original title of the console window."],["get_output_code_page","Returns the output code page used by the console."],["get_output_mode","Returns settings related to console output."],["get_scroll_position","Returns the current scroll position of a window scroll bar."],["get_selection_info","Returns a SelectionInfo object containing information about console selection."],["get_state","Returns a ConsoleState object containing information about the current state of the console."],["get_supported_code_pages","Returns a list of supported code pages."],["get_title","Returns the title of the console window."],["get_window_size","Returns the size of the window in character cells. These dimensions also serve as minimum values for the size of the buffer."],["getch","Reads a single character from the input buffer. Note that this will wait for input from the user, and will only accept certain characters; this will not return from a control key press event."],["is_cursor_visible","Returns a boolean representing whether or not the console cursor is visible."],["is_valid_code_page","Returns a boolean representing whether or not the supplied value is a valid code page. A code page is considered valid if it is installed on the system."],["map_color","Maps a ConsoleColor to an RGB8 value."],["move_contents","Moves data from a rectangle of the console output to another point in the output. The effects of the move can be limited by specifying a clipping rectangle, so the contents of the console screen buffer outside the clipping rectangle are unchanged."],["read_output","Reads a string from the console output starting at a specified location. Note that this method reads the output buffer directly (i.e., an empty end of a line will be made up of multiple space characters rather than a newline character sequence)."],["read_output_colors","Reads colors from the console output starting at a specified location, and returns a vector of tuples. The first item in each tuple is the foreground color, and the second is the background color."],["scroll_by","Scrolls the console window by the specified amount relative to its current position, in character cells. If the resultant position is greater than the maximum scroll position, the window is scrolled to the maximum position."],["scroll_to","Scrolls the console window to the specified position, in character cells. If the specified position is greater than the maximum scroll position, the window is scrolled to the maximum position."],["set_background_color","Sets the background color of the console."],["set_buffer_size","Sets the size of the output buffer."],["set_color_mapping","Sets the color mapping of the console. The indices of the array correspond with ConsoleColor values."],["set_ctrl_handler","Adds or removes a handler routine from the console."],["set_cursor_position","Sets the position of the console cursor."],["set_cursor_size","Sets the size of the console cursor. Must be between 0 and 100 (inclusive)."],["set_cursor_visible","Sets the visibility of the console cursor."],["set_font","Sets information about the console font."],["set_foreground_color","Sets the foreground color of the console."],["set_history_info","Sets information about console input history settings."],["set_input_code_page","Sets the input code page to be used by the console."],["set_input_mode","Sets settings related to console input."],["set_output_code_page","Sets the output code page to be used by the console."],["set_output_mode","Sets settings related to console output."],["set_state","Sets the state of the console to a ConsoleState."],["set_title","Sets the title of the console window."],["set_window_size","Sets the size of the console window in character cells. If the screen buffer is too small for the new size, it is resized as well."],["write_output","Writes characters to the output at a specified position, and returns the number of cells which were written to.  "],["write_output_colors","Changes the output colors starting at a specified position, and returns the number of cells which were written to."]],"struct":[["CodePageInfo","Information about a code page."],["ConsoleFont","Represents a usable console font."],["ConsoleState","Represents the state of the console."],["HistoryInfo","Information about console history."],["InputSettings","Settings related to console input.  "],["OutputSettings","Settings related to console output.  "],["Rect","Defines the coordinates of the corners of a rectangle."],["SelectionInfo","Information about a console selection."]]});
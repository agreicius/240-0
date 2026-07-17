#############################################################################
# This macro library supports WeBWorK problems from the PreTeXt project named
# Real vector spaces
#############################################################################


# Return a string containing the latex-image-preamble contents.
# To be used by LaTeXImage objects as in:
# $image->addToPreamble(latexImagePreamble())

sub latexImagePreamble {
return <<'END_LATEX_IMAGE_PREAMBLE'
\usepackage{tikz}
\usepackage{tikz-cd}
\usepackage{tkz-graph}
\usepackage{tkz-euclide}
\usepackage{pgfplots}
\usetikzlibrary{matrix,shapes,decorations.pathreplacing,fit,backgrounds,positioning}
\usetikzlibrary{patterns}
\usetikzlibrary{positioning}
\usetikzlibrary{arrows}
\usetikzlibrary{calc}
\usetikzlibrary{through,intersections,decorations,shadows,fadings}

END_LATEX_IMAGE_PREAMBLE
}
